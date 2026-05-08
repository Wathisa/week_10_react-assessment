import { useEffect, useState } from "react";
import AdminSection from "./components/AdminSection";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Owner from "./components/Owner";
import UserSection from "./components/UserSection";
import "./App.css";

const API_URL = "https://69fda8a130ad0a6fd1c1355f.mockapi.io/members";

function App() {
  const [page, setPage] = useState("home");
  const [homeSection, setHomeSection] = useState("main");
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [createError, setCreateError] = useState("");

  useEffect(() => {
    async function fetchMembers() {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Cannot fetch members");
        }

        const data = await response.json();
        setMembers(data);
      } catch {
        setErrorMessage("Cannot load member data. Please check the API URL.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchMembers();
  }, []);

  function handleNavigate(nextPage) {
    setPage(nextPage);

    if (nextPage === "home") {
      setHomeSection("main");
    }
  }

  function handleSelectSection(section) {
    setPage("home");
    setHomeSection(section);
  }

  async function handleCreateMember(newMember) {
    setIsSaving(true);
    setCreateError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMember),
      });

      if (!response.ok) {
        throw new Error("Cannot create member");
      }

      const createdMember = await response.json();
      setMembers((currentMembers) => [...currentMembers, createdMember]);
      return true;
    } catch {
      setCreateError("Cannot save member. Please try again.");
      return false;
    } finally {
      setIsSaving(false);
    }
  }

  function renderPage() {
    if (page === "owner") {
      return <Owner />;
    }

    if (homeSection === "user") {
      return (
        <UserSection
          members={members}
          activeSection={homeSection}
          isLoading={isLoading}
          errorMessage={errorMessage}
          onSelectSection={handleSelectSection}
        />
      );
    }

    if (homeSection === "admin") {
      return (
        <AdminSection
          members={members}
          activeSection={homeSection}
          isLoading={isLoading}
          errorMessage={errorMessage}
          isSaving={isSaving}
          createError={createError}
          onCreateMember={handleCreateMember}
          onSelectSection={handleSelectSection}
        />
      );
    }

    return <Home onSelectSection={handleSelectSection} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Navbar activePage={page} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}

export default App;
