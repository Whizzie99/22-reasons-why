import styled from 'styled-components';

export const StyledWrapper = styled.div`
	.main-header-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1.5em;

		h1 {
			text-align: center;
			font-family: var(--font-stack-1);
			text-transform: capitalize;
			font-size: 3em;
			color: var(--white);
		}

		p {
			font-family: var(--font-stack-2);
			text-align: center;
			font-size: 1.5em;
			margin: 1.5em 0;
			font-weight: 400;
			color: var(--white);
		}
	}

	@media screen and (min-width: 1200px) {
		padding: 3em 2em;

		.main-header-section h1 {
			font-size: 3.5em;
		}

		.main-header-section p {
			font-size: 1.5em;
		}
	}
`;
