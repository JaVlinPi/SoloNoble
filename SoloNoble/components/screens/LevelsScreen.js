import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LEVEL_DATA } from "../../data/Levels";
import LevelListItem from "../LevelListItem";

class LevelsScreen extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <ScrollView style={styles.main} onScroll={this.onScroll}>
                <Text>{'Levels Screen'}</Text>
                { LEVEL_DATA.beginner.map((data) => {
                    return (
                        <LevelListItem data={data} />
                    );
                })}
        </ScrollView>;
    }

}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: '100%',
        borderColor: 'red',
        borderWidth: 1,
        overflow: 'visible',
        position: 'relative'
    },
});

export default LevelsScreen;