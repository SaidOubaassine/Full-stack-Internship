import React from "react";
import {
  FlatList,
  Button,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as postsActions from "../store/actions/posts"

function Posts({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const [onRefreshing, setOnRefreshing] = useState(false);
  const [error, setError] = useState(false);
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  
  const loadPosts = useCallback(async () => {
    setError(null);
    setOnRefreshing(true);
    try {
      await dispatch(postsActions.fetchPosts());
    } catch (err) {
      setError(err.message);
    }
    setOnRefreshing(false);
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    loadPosts().then(() => setIsLoading(false));
  }, [dispatch, loadPosts]);

 
  return (
    <FlatList
      onRefresh={loadPosts}
      refreshing={onRefreshing}
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <View key={itemData.index} style={styles.item}>
         <Pressable onPress={()=>{
          navigation.navigate("Detail", {
            Id: itemData.item.Id
          })
         }}>
         <Text>Id: {itemData.item.Id}</Text>
         <Text>UserId: {itemData.item.UserId}</Text>
         <Text>Title: {itemData.item.Title}</Text>
         <Text>Body: {itemData.item.Body}</Text>
         </Pressable>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item:{
    margin: 20,
    backgroundColor: "green"
  }
});

export default Posts;
