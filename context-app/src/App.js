import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Form from './Form';
import PageContent from './PageContent';
import {ThemeProvider, ThemeContext} from './contexts/ThemeContext';
import {LanguageProvider, LanguageContext} from './contexts/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <LanguageProvider>
          <Navbar />
          <Form />
        </LanguageProvider>
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
