import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { ListsProvider } from "@/contexts/ListsContext";
import { CurrentListProvider } from "@/contexts/CurrentListContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expense Tracker",
  description: "Track income and expenses",
};

export default function RootLayout({ children }) {
  return (
    <ListsProvider>
      <CurrentListProvider>
        <html lang="en">
          <body className={inter.className}>
            <main className="flex h-full flex-col items-center">
              <Header />
              {children}
            </main>
          </body>
        </html>
      </CurrentListProvider>
    </ListsProvider>
  );
}
