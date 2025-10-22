"use client"; // обязательно, чтобы работал Redux (Next.js по умолчанию серверный)
import { Provider } from "react-redux";
import { store } from "../store/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
