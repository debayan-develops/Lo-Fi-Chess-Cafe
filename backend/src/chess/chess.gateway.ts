// src/chess/chess.gateway.ts
import {
    WebSocketGateway,
    SubscribeMessage,
    MessageBody,
    WebSocketServer,
    ConnectedSocket,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
  import { Server, Socket } from 'socket.io';
  import { Logger } from '@nestjs/common';
  import { Chess } from 'chess.js'; // Optional: For server-side validation
  
  interface GameState {
    pgn: string;
    // Add more state if needed: players, turn, etc.
  }
  
  // Very simple in-memory store for game states per room
  const gameStates: Record<string, GameState> = {};
  
  @WebSocketGateway({
    cors: {
      origin: '*', // Allow all origins for simplicity, restrict in production
    },
  })
  export class ChessGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() server: Server;
    private logger: Logger = new Logger('ChessGateway');
  
    handleConnection(client: Socket, ...args: any[]) {
      this.logger.log(`Client connected: ${client.id}`);
    }
  
    handleDisconnect(client: Socket) {
      this.logger.log(`Client disconnected: ${client.id}`);
      // Handle cleanup if the client was in a game
    }
  
    @SubscribeMessage('joinGame')
    handleJoinGame(
      @ConnectedSocket() client: Socket,
      @MessageBody() gameId: string,
    ): void {
      client.join(gameId);
      this.logger.log(`Client ${client.id} joined game ${gameId}`);
      // Send current game state to the joining client
      if (gameStates[gameId]) {
          client.emit('gameState', gameStates[gameId]);
      } else {
          // Initialize game state if it doesn't exist
          gameStates[gameId] = { pgn: new Chess().pgn() };
          client.emit('gameState', gameStates[gameId]);
      }
    }
  
    @SubscribeMessage('makeMove')
    handleMakeMove(
      @ConnectedSocket() client: Socket,
      @MessageBody() data: { gameId: string; move: any }, // Use 'any' for simplicity, define type later
    ): void {
      const { gameId, move } = data;
      this.logger.log(
        `Move received from ${client.id} in game ${gameId}:`,
        move,
      );
  
      // Optional: Basic server-side validation using chess.js
      // const chess = new Chess();
      // try {
      //   chess.loadPgn(gameStates[gameId]?.pgn || '');
      //   const result = chess.move(move);
      //   if (!result) {
      //     client.emit('invalidMove', { message: 'Invalid move on server' });
      //     return;
      //   }
      //   gameStates[gameId].pgn = chess.pgn(); // Update state
      // } catch (e) {
      //   client.emit('invalidMove', { message: 'Invalid move format or state' });
      //    return;
      // }
  
      // Broadcast the move to all other clients in the same game room
      client.to(gameId).emit('opponentMove', move);
  
      // Optional: Update and broadcast the full game state if needed
      // this.server.to(gameId).emit('gameState', gameStates[gameId]);
    }
  }