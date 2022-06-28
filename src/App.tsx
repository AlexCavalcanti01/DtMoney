import Modal from 'react-modal';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./global";
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function CkOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function CkCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <TransactionsProvider>
        <Header onOpenNewTransactionModal={CkOpenNewTransactionModal} />

        <Dashboard />

        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={CkCloseNewTransactionModal}
        />

        <GlobalStyle />
    </ TransactionsProvider>
  );
}
