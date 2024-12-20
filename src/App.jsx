import React from "react";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import "./App.css";

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
    <>
      <Certificates certificates={certificates} />
      <Projects projects={projects} />
    </>
  );
}

export default App;
