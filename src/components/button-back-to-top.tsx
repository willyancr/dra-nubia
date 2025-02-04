"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export default function ButtonBackToTop() {
  // Estado para controlar a visibilidade do botão
  const [isVisible, setIsVisible] = useState(false);

  // Função para lidar com o evento de rolagem
  const handleScroll = useCallback(() => {
    // Mostra o botão quando a rolagem for maior que 500px
    if (!isVisible && window.scrollY > 500) setIsVisible(true);
    // Esconde o botão quando a rolagem for menor ou igual a 500px
    if (isVisible && window.scrollY <= 500) setIsVisible(false);
  }, [isVisible]);

  // Adiciona o evento de rolagem quando o componente é montado
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Remove o evento de rolagem quando o componente é desmontado
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Função para rolar suavemente para o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-10 right-5 bg-tertiary"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
