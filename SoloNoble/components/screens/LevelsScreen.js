import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LEVEL_DATA } from "../../data/Levels";
import LevelListItem from "../LevelListItem";

class LevelsScreen extends React.Component {

    constructor() {
        super();
    }

    render() {
        var levelGroup = 'beginner';
        return <ScrollView style={styles.main} onScroll={this.onScroll}>
                <Text>{'Levels Screen'}</Text>
                { LEVEL_DATA[levelGroup].map((data, index) => {
                    return (
                        <LevelListItem
                            data={{
                                ...data,
                                levelIndex: index,
                                levelGroup: levelGroup,
                            }}
                            navigation={this.props.navigation}
                        />
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