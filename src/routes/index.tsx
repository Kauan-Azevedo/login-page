import { useEffect, useState } from "react";
import { setupAuthListener } from "../api/auth/auth.service";
import { isAuthenticated } from "../api/auth/auth.service";
import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import "../css/styles.css";

import Navbar from "../components/Navbar";
import Content from "../components/Content";
import PokemonList from "../components/pokemon/PokemonList";
import PokemonDetailsModal from "../components/pokemon/PokemonDetailsModal";
import PokemonDetails from "../components/pokemon/PokemonDetails";
import {
  getPokemonList,
  getPokemonDetails,
} from "../api/pokemon/pokemon.service";
import {
  getPokemonListResponse,
  getPokemonDetailsResponse,
} from "../api/pokemon/pokemon.response.types";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const authenticated = await isAuthenticated();
    if (!authenticated) throw redirect({ to: "/auth" });
  },
  component: HomeComponent,
});

function HomeComponent() {
  const [pokemonList, setPokemonList] = useState<getPokemonListResponse | null>(
    null
  );
  const [selectedPokemon, setSelectedPokemon] =
    useState<getPokemonDetailsResponse | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    const fetchData = async () => {
      const offset = (currentPage - 1) * itemsPerPage;
      const listData = await getPokemonList(offset, itemsPerPage);
      setPokemonList(listData);
      setTotalPages(Math.ceil(listData.count / itemsPerPage));
    };
    fetchData();
    const unsubscribe = setupAuthListener();
    return () => unsubscribe();
  }, [currentPage]);

  const handleCardClick = async (pokemonId: number) => {
    const detailsData = await getPokemonDetails(pokemonId);
    setSelectedPokemon(detailsData);
    setShowDetailsModal(true);
  };

  const handleCloseModal = () => {
    setShowDetailsModal(false);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Navbar />
      <Content>
        {pokemonList && (
          <>
            <PokemonList
              pokemons={pokemonList.results}
              onPokemonClick={handleCardClick}
            />
            <div className="pagination">
              <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
        {selectedPokemon && (
          <PokemonDetailsModal
            isOpen={showDetailsModal}
            onClose={handleCloseModal}
            content={<PokemonDetails pokemon={selectedPokemon} />}
          />
        )}
      </Content>
    </>
  );
}

export default HomeComponent;
