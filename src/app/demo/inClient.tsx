"use client";

import { useInteractor } from "../context";

export function InClientButton() {
	const interactor = useInteractor();
	return (
		<button type="button" onClick={() => console.log(interactor)}>
			クライアントボタン
		</button>
	);
}
