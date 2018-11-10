import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>DDE Releases</h1>
		<h2>Development Releases</h2>
		<p>The latest release of Dexter Development Environment. </p>
		<p>Current version: v2.5.9</p>
		<ul>
			<li>Windows</li>
			<li>Linux</li>
			<li>macOS</li>
		</ul>
		<h2>LTS Releases</h2>
		<p>Long term support releases.  Will remain stable for a longer duration of time.</p>
		<p>Current version: v2.5.9</p>
		<ul>
			<li>Windows</li>
			<li>Linux</li>
			<li>macOS</li>
		</ul>
	</div>
);

export default Home;
