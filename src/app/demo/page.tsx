import { useContext } from "react";
import styles from "../page.module.css";
import { InteractorContext } from "../context";
import { InClientButton } from "./inClient";

export default function DemoHome() {
	return (
		<div className={styles.page}>
			<main>
				<h1>デモページ</h1>
				<p>一覧</p>
				<ul>
					<li>A</li>
					<li>B</li>
					<li>C</li>
				</ul>
				<InClientButton />
			</main>
		</div>
	);
}
