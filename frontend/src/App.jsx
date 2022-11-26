import {
  Modal,
  Header,
  Footer,
  Welcome,
  Services,
  Transactions,
} from './components';

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Modal />
        <Header />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
}

export default App;
