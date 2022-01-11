import { createGlobalStyle } from "styled-components/macro";

export const GlobalStyle = createGlobalStyle`
/*! minireset.css v0.0.3 | MIT License | github.com/jgthms/minireset.css */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
	padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-size: 100%;
	font-weight: normal;
}
ul {
	list-style: none;
}
button,
input,
select,
textarea {
	margin: 0;
}
html {
	box-sizing: border-box;
}

body {
	background-color: #f2f2f2;
}
*,
*:before,
*:after {
	box-sizing: inherit;
}
img,
embed,
iframe,
object,
audio,
video {
	height: auto;
	max-width: 100%;
}
iframe {
	border: 0;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
td,
th {
	padding: 0;
	text-align: left;
}

@font-face {
	font-family: 'Knewave';
	src: url('/Knewave-Regular.ttf');
}

@font-face {
	font-family: 'Montserrat';
	src: url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
}

:root {
	font-family: Montserrat, 'Open Sans', 'Helvetica Neue', sans-serif;
	--font-mono: 'Fira Mono', monospace;
	--font-fun: 'Knewave';
	--pure-white: #ffffff;
	--primary-color: #273750;
	--secondary-color: #ac573b;
	--tertiary-color: #edf0f8;
	--accent-color: #fdb62f;
	--heading-color: rgba(0, 0, 0, 0.7);
	--text-color: #444444;
	--background: #efe7dc;
	--column-width: 42rem;
	--column-margin-top: 4rem;
}
`;
