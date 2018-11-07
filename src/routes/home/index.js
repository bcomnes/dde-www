import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>DDE Releases</h1>
		<h2>Development Releases</h2>
		<p>The latest release of Dexter Development Environment. </p>
		<h2>LTS Releases</h2>
		<p>Long term support releases.  Will remain stable for a longer duration of time.</p>
	</div>
);

export default Home;
