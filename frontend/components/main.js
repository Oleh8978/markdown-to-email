import React from 'react';
import Body from './body';
import Divider from './body/divider';

export default function App() {
    return (
        <Body
            header={"Some Header"}
        >
            Some content
            <Divider>
                Divider
            </Divider>
        </Body>
    );
}