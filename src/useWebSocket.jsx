import { useEffect, useRef, useState } from "react";

export default function useWebSocket(url) {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    socketRef.current = ws;

    ws.onopen = () => {
      console.log("연결됨");
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      console.log("메시지 수신:", event.data);
      setMessages((prev) => [...prev, event.data]);
    };

    ws.onclose = () => {
      console.log("연결 종료");
      setIsConnected(false);
    };

    ws.onerror = (err) => {
      console.error("에러 발생:", err);
    };

    return () => {
      ws.close();
    };
  }, [url]);

  const sendMessage = (msg) => {
    if (socketRef.current?.readyState === WebSocket.OPEN) {
      socketRef.current.send(msg);
    } else {
      console.warn("WebSocket이 아직 연결되지 않았습니다.");
    }
  };

  return { messages, isConnected, sendMessage };
}
