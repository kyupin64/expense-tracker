import { Inter } from "next/font/google";
import "./globals.css";
import { ListsProvider } from "@/contexts/ListsContext";
import { CurrentListProvider } from "@/contexts/CurrentListContext";
import Header from "../components/Header";
import Footer from "@/components/Footer";

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
          <body className={`${inter.className} h-max`}>
            <main className="flex h-max w-full flex-col gap-10 items-center justify-between">
              <Header />
              {children}
              <Footer />
            </main>
          </body>
        </html>
      </CurrentListProvider>
    </ListsProvider>
  );
};
