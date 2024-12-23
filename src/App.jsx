// App.jsx
import React from "react";
import Header from "./components/Header";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { ThemeProvider } from "./contexts/ThemeContext";

import { useEffect, useState } from "react";
import { supabase } from "./lib/supabaseClient.jsx";

function App() {
  const [certificates, setCertificates] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getCertificates();
  }, []);
  useEffect(() => {
    getProjects();
  }, []);

  async function getCertificates() {
    const { data } = await supabase.from("certificates").select();
    setCertificates(data);
  }
  async function getProjects() {
    const { data } = await supabase.from("projects").select();
    setProjects(data);
  }

  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Header />} />

          <Route
            path="/certificates"
            element={<Certificates certificates={certificates} />}
          />
          <Route path="/projects" element={<Projects projects={projects} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;