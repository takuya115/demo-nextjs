"use client";

import { createContext, useContext, type ReactNode } from "react";
import type Interactor from "../domain/usecase/interactor";
import { buildInteractor } from "../libs/wire";

export const InteractorContext = createContext<Interactor | null>(null);

export const InteractorProvider = (props: { children: ReactNode }) => {
	const interactor = buildInteractor();
	return (
		<InteractorContext.Provider value={interactor}>
			{props.children}
		</InteractorContext.Provider>
	);
};

export const useInteractor = () => {
	const context = useContext(InteractorContext);
	if (!context) {
		throw new Error("useInteractor must be used within an InteractorProvider");
	}
	return context;
};
