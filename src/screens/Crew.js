import React from "react";
import { Image, FlatList, StyleSheet, View, Text } from "react-native";
import FadeIn from "react-native-fade-in-image";
import { ScrollView } from "react-native-gesture-handler";

import { Colors } from "../constants";
import MenuButton from "../components/MenuButton";
import { BoldText, SemiBoldText, RegularText } from "../components/StyledText";
import LoadingPlaceholder from "../components/LoadingPlaceholder";

export const Schedule = require("../data/schedule.json");

const CrewData = Schedule.events[0].collaborators;

class CrewRow extends React.Component {
  render() {
    const { item: crew } = this.props;

    return (
      <View style={styles.row}>
        <View style={styles.rowAvatarContainer}>
          <FadeIn>
            <Image
              source={{ uri: crew.avatarUrl }}
              style={{ width: 50, height: 50, borderRadius: 25 }}
            />
          </FadeIn>
        </View>
        <View style={styles.rowData}>
          <BoldText>
            {crew.firstName} {crew.lastName}
          </BoldText>
          {crew.role ? <SemiBoldText>{crew.role}</SemiBoldText> : null}
          <RegularText>@{crew.twitter}</RegularText>
        </View>
      </View>
    );
  }

  _handlePress = () => {
    // do nothing for now
    // alert('pressed!')
  };
}

export default class Crews extends React.Component {
  static navigationOptions = {
    title: "Crew",
    headerStyle: { backgroundColor: Colors.blue },
    headerTintColor: "white",
    headerLeft: <MenuButton />,
    headerTitleStyle: {
      fontFamily: "open-sans-bold"
    }
  };

  render() {
    return (
      <LoadingPlaceholder>
        <FlatList
          renderScrollComponent={props => <ScrollView {...props} />}
          renderItem={this._renderItem}
          data={CrewData}
          keyExtractor={(item, index) => index}
        />
      </LoadingPlaceholder>
    );
  }

  _renderItem = ({ item }) => {
    return <CrewRow item={item} />;
  };
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#eee",
    backgroundColor: "#fff",
    flexDirection: "row"
  },
  rowAvatarContainer: {
    paddingVertical: 5,
    paddingRight: 10,
    paddingLeft: 0
  },
  rowData: {
    flex: 1
  }
});
