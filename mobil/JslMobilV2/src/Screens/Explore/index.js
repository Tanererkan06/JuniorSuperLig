import React from 'react';
import { Text, View } from 'react-native';
import { Colors, Fonts, Images } from '../../Constants';
import { McText, McImage} from '../../Components';
import styled from 'styled-components/native'

const Explore = ({
    params,
}) => (
    <Container>
        <McText size={24} >Haberler</McText>
    </Container>
);

const Container = styled.SafeAreaView`
  flex: 1;
  background: ${(props) => Colors.background};
  justify-content: center;
  align-items: center;
`;

export default Explore;