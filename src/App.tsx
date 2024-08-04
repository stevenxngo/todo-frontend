import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import TodoForm from 'components/TodoForm';
import TodoDetails from 'components/TodoDetails';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import { useConfigCheck } from 'hooks/useConfigCheck ';


/**
 * The main application component that sets up routing for the app.
 * Uses React Router to define routes and render different components based on the URL.
 * 
 * @returns {React.FC} The App component.
 */
const App: React.FC = () => {
  const configError = useConfigCheck();

  if (configError){
    console.error('CONFIGURATION ERROR');
    return;
  } 

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4 mt-16">
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/list" element={<TodoList />} />
            <Route path="/add" element={<TodoForm />} />
            <Route path="/todos/:id" element={<TodoDetails />} />
            <Route path="/edit/:id" element={<TodoForm />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;