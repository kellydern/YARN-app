import { TextInput } from 'react-native';


<TextInput
  placeholder="Enter first name..."
  style={{ width: 300, height: 40 }}
  onChangeText={(text)} => console.log(text)}
  autoCorrect={false}
  autoCapitalize="none" // sentences, words, character
  />
