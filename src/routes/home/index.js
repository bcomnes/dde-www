import { h } from 'preact';
import style from './style';

const Home = () => (
	<div class={style.home}>
		<h1>DDE Releases</h1>
		<h2>Development Releases</h2>
		<p>The latest release of Dexter Development Environment. </p>
		<p>Current version: <a href="https://github.com/cfry/dde/releases/tag/v2.4.3">v2.4.3</a></p>
		<ul>
			<li><a href="https://github.com/cfry/dde/releases/download/v2.4.3/dexter_dev_env-Setup-2.4.3.exe">Windows</a></li>
			<li><a href="https://github.com/cfry/dde/releases/download/v2.4.3/dexter_dev_env-2.4.3-x86_64.AppImage">Linux</a></li>
			<li><a href="https://github.com/cfry/dde/releases/download/v2.4.3/dexter_dev_env-2.4.3.dmg">macOS</a></li>
		</ul>
		<h2>LTS Releases</h2>
		<p>Long term support releases.  Will remain stable for a longer duration of time.</p>
		<p>Current version: <a href="https://github.com/cfry/dde/releases/tag/v2.4.3">v2.4.3</a></p>
		<ul>
			<li><a href="https://github.com/cfry/dde/releases/download/v2.4.3/dexter_dev_env-Setup-2.4.3.exe">Windows</a></li>
			<li><a href="https://github.com/cfry/dde/releases/download/v2.4.3/dexter_dev_env-2.4.3-x86_64.AppImage">Linux</a></li>
			<li><a href="https://github.com/cfry/dde/releases/download/v2.4.3/dexter_dev_env-2.4.3.dmg">macOS</a></li>
		</ul>
	</div>
);

export default Home;
