import React from 'https://deno.land/x/react_deno@17.0.2/react.ts'

type Props = {
	colors: string[]
}

export const App = (Props: Props) => {
	const { colors } = Props

	return (
		<html lang='en'>
			<head>
				<meta charSet='UTF-8' />
				<meta http-equiv='X-UA-Compatible' content='IE=edge' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<title>Deno</title>
			</head>
			<body>
				<form action='/' method='POST'>
					<label htmlFor='color'>Ingrese un color</label> 
					<input id='color' name='color' type='text' />
					<button type='submit'>Enviar</button>
				</form>

				<ul>
					{colors.map((color: string) => (
						<li
							style={{
								color: `${color}`,
							}}
						>
							{color}
						</li>
					))}
				</ul>
			</body>
		</html>
	)
}