import { Link } from 'react-router-dom';
import Exercicio from '../../../models/Exercicio';
import React from 'react';
import { useNavigate } from "react-router-dom";

interface CardExercicioProps {
    exercicio: Exercicio;
}

export default function CardExercicio() {
    const navigate = useNavigate();

    // Lista de exercícios recomendados
    const exercicios = [
        "Simulador de caminhada",
        "Remada",
        "LegPress",
        "Multi exercitador",
        "Cavalgada",
        "Volante de rotação"
    ];

    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Imagem do treino */}
            <img 
                src="https://img.freepik.com/fotos-gratis/jovem-homem-musculoso-caucasiano-sem-camisa-fazendo-abdominais-na-barra-horizontal-no-playground-em-um-dia-ensolarado-de-verao_155003-26863.jpg?t=st=1741118526~exp=1741122126~hmac=7d5cc8e6f096ff4d6b498fc6edaf8215daa13c587ff18a8fed748a9571d291b9&w=1380" 
                alt="Treinamento ao Ar Livre"
                className="w-full h-48 object-cover"
            />

            {/* Barra de título */}
            <div className="bg-green-500 text-white text-center font-bold py-2 text-lg">
                EMAGRECIMENTO INTENSO
            </div>

            {/* Informações principais */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">⏳</span>
                        <span className="text-gray-700 font-semibold">Duração</span>
                        <span className="text-gray-600">30 min</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg">⚡</span>
                        <span className="text-gray-700 font-semibold">Intensidade</span>
                        <span className="text-gray-600">Alta</span>
                    </div>
                </div>

                {/* Descrição */}
                <p className="text-gray-700 text-sm mb-4">
                Com duração de aproximadamente 30 minutos combinamos cardio, mobilidade e força para acelerar o metabolismo e maximizar a queima de gordura.
                </p>

                {/* Lista de exercícios */}
                <div className="bg-gray-100 p-3 rounded-lg shadow-sm">
                    <h3 className="text-md font-semibold text-gray-800">Exercícios do treino</h3>
                    <ul className="mt-2 text-gray-600 text-sm list-disc list-inside">
                        {exercicios.map((exercicio, index) => (
                            <li key={index}>{exercicio}</li>
                        ))}
                    </ul>
                </div>

                {/* Botão de ação */}
                <button 
                    className="w-full text-green-600 font-semibold text-sm py-2 mt-4 hover:underline"
                    onClick={() => navigate('/listacategorias/ListaSaudeEmFoco')}>
                        Saiba mais
                </button>
            </div>
        </div>
    );
}
 