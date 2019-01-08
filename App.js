import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, FlatList, TouchableHighlight, Alert } from 'react-native';
import persons from './object/pic';
import icons from './object/icon';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>

          <View style={styles.header1}>

            <View>
              <Image source={require('./asset/menu.png')}
                style={{ height: 40, width: 40, }}
              />
            </View>

            <View style={styles.header11}>
              <View><Image source={require('./asset/doe.jpg')}
                style={{ height: 50, width: 50, borderRadius: 50, borderColor: 'white', borderWidth: 2 }}
              />
              </View>
              <View>
                <Text style={{fontWeight:'bold',fontSize: 18, color: 'white', paddingLeft: 15, paddingTop: 10 }}>
                  John Kendington
                </Text>
                <Text style={{fontSize: 15, color: 'white', paddingLeft: 15,}}>
                  John Kendington
                </Text>
              </View>
            </View>

            <View style={styles.profilee}>
              <Text style={{ fontSize: 26, color: 'white', marginTop: 50 }}>
                Profile
                </Text>
            </View>

            <View><Image source={require('./asset/setting.png')}
              style={{ height: 26, width: 26, marginTop: 50 }}
            />
            </View>

          </View>

          <View style={styles.header2}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View><Image source={require('./asset/document.png')}
                style={{ height: 20, width: 20, marginTop: 10, marginLeft: 30 }}
              />
              </View>
              <View>
                <Text style={{ fontSize: 16, color: 'white', paddingRight: 950, marginTop: 10 }}>
                  Document.Profile
                </Text>
              </View>

              <View>
                <Text style={{ fontSize: 16, color: 'white', paddingRight: 20, marginTop: 10 }}>
                  Mon, January 7
                </Text>
              </View>

            </View>

          </View>

        </View>



        <View style={styles.main}>

          <View style={styles.contact}>

            <View style={styles.icon}>

              <FlatList

                data={icons}
                keyExtractor={item => item.title}
                renderItem={({ item }) => {

                  return (
                    <TouchableHighlight underlayColor='rgba(38,208,193,.8)' onPress={() => {
                      Alert.alert(item.title)
                    }}
                    >
                      <View style={{ flex: 1 }}>


                        <View style={styles.main1}>
                          <Image
                            source={item.image}
                            style={{ height: 40, width: 40, borderRadius: 100, marginLeft: 25, marginVertical: 10 }}
                          />

                        </View>
                      </View>
                    </TouchableHighlight>
                  );
                }
                }

              />

            </View>

            <View style={styles.person}>
              <View style={styles.search}>
                <View style={styles.search1}>
                  <Image source={require('./asset/search.png')}
                    style={{ height: 30, width: 30, }}
                  />
                </View>
                <View style={styles.search2}>
                  <Text style={{ color: '#8a8d93', fontSize: 16, }}>Search</Text>
                </View>
              </View>
              <View style={styles.persons}>
                <FlatList

                  data={persons}
                  keyExtractor={item => item.title}
                  renderItem={({ item }) => {

                    return (
                      <TouchableHighlight underlayColor='rgba(0,0,0,.3)' onPress={() => {
                        Alert.alert(item.title)
                      }}

                      >
                        <View style={{ flex: 1 }}>


                          <View style={styles.main}>
                            <Image
                              source={item.image}
                              style={{ height: 50, width: 50, borderRadius: 100, marginLeft: 10, marginVertical: 10 }}
                            />
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                              <Text style={{ fontSize: 14, color: 'white', paddingLeft: 20, }}>{item.title}</Text>
                              <Image
                                source={item.image2}
                                style={{ height: 15, width: 15, marginRight: 5 }}
                              />
                            </View>

                          </View>
                        </View>
                      </TouchableHighlight>
                    );

                  }
                  }

                />
              </View>

            </View>

          </View>


          <View style={styles.picture}>
            <View style={styles.pic1}>

              <View style={styles.pic11}>
                <View style={{ flex: 2, marginLeft: 30, }}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('./asset/doe.jpg')}
                      style={{ height: 135, width: 135, borderRadius: 70, borderColor: '#6895a5', borderWidth: 7 }}
                    /></View>
                  <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>
                      John Kendington
                </Text>
                    <Text style={{ color: '#cbd1d4', }}>
                      Document.Profileeee
                </Text>
                    <Text style={{ color: '#61decd', }}>
                      Document.Profile
                </Text>
                  </View>
                </View>
                <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 80 }}>
                  <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('./asset/avatar.png')}
                      style={{ height: 33, width: 33, }}
                    />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>
                      863
                </Text>
                    <Text style={{ color: '#cbd1d4', fontSize: 16 }}>
                      Followers
                </Text>
                  </View>
                  <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('./asset/comment.png')}
                      style={{ height: 33, width: 33, }}
                    />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>
                      2471
                </Text>
                    <Text style={{ color: '#cbd1d4', fontSize: 16 }}>
                      Comment
                </Text>
                  </View>
                  <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={require('./asset/like.png')}
                      style={{ height: 33, width: 33, }}
                    />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}>
                      1593
                </Text>
                    <Text style={{ color: '#cbd1d4', fontSize: 16 }}>
                      like
                </Text>
                  </View>
                </View>
              </View>
              <View style={styles.pic12}>
                <View style={{ flex: 2, marginLeft: 30, }}>
                  <View>
                    <Text style={{ paddingTop: 13, alignItems: 'center', color: 'white', fontSize: 22 }}>
                      Statistics
                  </Text>
                  </View>
                </View>
                <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'space-evenly', marginLeft: 80 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('./asset/Green.png')}
                      style={{ height: 15, width: 15, }}
                    />
                    <Text style={{ color: 'white', fontSize: 18, paddingLeft: 7 }}>
                      Green
                </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('./asset/blue.png')}
                      style={{ height: 15, width: 15, }}
                    />
                    <Text style={{ color: 'white', fontSize: 18, paddingLeft: 7 }}>
                      Blue
                </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('./asset/purple.png')}
                      style={{ height: 15, width: 15, }}
                    />
                    <Text style={{ color: 'white', fontSize: 18, paddingLeft: 7 }}>
                      Purple
                </Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.pic2}>
              <Image
                resizeMode='stretch'
                source={require('./asset/graph.png')}
                style={{ width: 800, height: 380 }}
              />
            </View>
          </View>



        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  header: {
    flex: 1,

  },


  header1: {
    flex: 0.7,
    flexDirection: 'row',
    backgroundColor: '#61decd',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },

  profilee: {
    paddingRight: 420,
  },

  header11: {
    flex: 0.7,
    flexDirection: 'row',
    marginRight:300

  },


  header2: {
    flex: 0.3,
    backgroundColor: '#3c475d',

  },


  main: {
    flex: 4,
    flexDirection: 'row',


  },

  main1: {
    flex: 4,
    flexDirection: 'row',
    paddingVertical: 20,

  },

  picture: {
    flex: 3,

    backgroundColor: 'pink',

  },

  pic1: {
    flex: 0.5,


  },

  pic11: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#5c6b88',

  },

  pic12: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#5c6b88',


  },

  pic2: {
    flex: 0.5,
    backgroundColor: 'white',


  },

  contact: {
    flex: 2,
    flexDirection: 'row',
  },

  person: {
    flex: 0.9,
    backgroundColor: '#011439',
  },

  search: {
    flex: 0.8,
    flexDirection: 'row',
    backgroundColor: '#56595e',
    borderWidth: 2,
    borderColor: '#8a8d93',
    marginHorizontal: 7,
    marginTop: 7,
  },

  search1: {
    flex: 0.2,
    backgroundColor: '#61decd',
    justifyContent: 'center',
    alignItems: 'center',
  },

  search2: {
    flex: 0.8,
    backgroundColor: '#56595e',
    justifyContent: 'center',
    marginLeft: 20,
  },

  persons: {
    flex: 10,
    flexDirection: 'row',
    backgroundColor: '#011439',
  },

  icon: {
    flex: 0.2,
    backgroundColor: '#3c475d',
  },




});
