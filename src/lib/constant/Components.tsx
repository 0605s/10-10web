import styled from 'styled-components';

export const RowContainer = styled.div<{ backgroundImg?: string }>`
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 0;
	background-image: url(${(props) => props.backgroundImg});
`;

export const Title = styled.div`
	font-family: 'YoonGothic';
	font-weight: 600;
	font-size: 4rem;
`;

export const SubTitle = styled.div`
	font-family: 'YoonGothic';
	font-weight: 500;
	font-size: 3rem;
`;

export const Content = styled.div`
	font-family: 'YoonGothic';
	font-weight: 400;
	font-size: 2rem;
`;

export const SubContent = styled.div`
	font-family: 'YoonGothic';
	font-weight: 300;
	font-size: 1rem;
`;