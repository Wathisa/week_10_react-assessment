import { useEffect, useState } from "react";
import AdminSection from "./components/AdminSection";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Owner from "./components/Owner";
import UserSection from "./components/UserSection";

const API_URL = "https://69fda8a130ad0a6fd1c1355f.mockapi.io/members";

function App() {
  const [page, setPage] = useState("home");
  const [homeSection, setHomeSection] = useState("main");
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [createError, setCreateError] = useState("");
  const [deletingId, setDeletingId] = useState("");
  const [deleteError, setDeleteError] = useState("");

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

  async function handleDeleteMember(memberId) {
    setDeletingId(memberId);
    setDeleteError("");

    try {
      const response = await fetch(`${API_URL}/${memberId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Cannot delete member");
      }

      setMembers((currentMembers) =>
        currentMembers.filter((member) => member.id !== memberId)
      );
    } catch {
      setDeleteError("Cannot delete member. Please try again.");
    } finally {
      setDeletingId("");
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
          deletingId={deletingId}
          deleteError={deleteError}
          onCreateMember={handleCreateMember}
          onDeleteMember={handleDeleteMember}
          onSelectSection={handleSelectSection}
        />
      );
    }

    return <Home onSelectSection={handleSelectSection} />;
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <Navbar activePage={page} onNavigate={handleNavigate} />
      {renderPage()}
    </div>
  );
}

export default App;
