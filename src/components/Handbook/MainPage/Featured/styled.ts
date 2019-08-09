import styled, { media } from '@theme'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { Container, Title as BaseTitle, Text as BaseText } from '../../../UI'

import ArrowIcon from '../../common/Arrow'

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;

  margin-bottom: 5rem;

  ${media.large} {
    grid-template-columns: 1fr;
  }
`

export const Content = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.medium} {
    max-width: 100%;
  }

  transition: opacity ${({ theme }) => theme.transitions.ease()};
`

export const Title = styled(BaseTitle)`
  margin-bottom: 0.75rem;
`

export const Text = styled(BaseText)`
  margin-bottom: 2.5rem;
`

export const LinkText = styled(BaseText)`
  color: inherit;
`

export const LinkHolder = styled.div`
  display: flex;
  align-items: center;
`

export const RightArrow = styled(ArrowIcon)`
  margin-left: 0.5rem;
  transition: transform ${({ theme }) => theme.transitions.cubic()};
`

export const Image = styled(Img)`
  position: absolute !important;
  max-width: 15rem;

  width: 40%;
  right: 0;
  top: 2rem;

  ${media.largest} {
    width: 50%;
    right: -3rem;
  }

  ${media.large} {
    right: 2rem;
  }

  ${media.medium} {
    position: relative !important;
    right: auto;
    top: auto;
    width: 100%;

    margin-top: 3rem;
    margin-bottom: -7rem;
  }
`

export const BoxLink = styled(Link)`
  display: flex;
  position: relative;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.colors.subtle};
  color: ${({ theme }) => theme.colors.foreground};

  border-radius: 2px;

  padding: 2rem;
  margin-bottom: 5rem;

  ${media.medium} {
    flex-direction: column;
  }

  ${media.hover} {
    &:hover {
      ${Content} {
        opacity: 0.6;
      }

      ${RightArrow} {
        transform: translateX(0.5rem);
      }
    }
  }
`
