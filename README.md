## Usage
```
npm install git+ssh://git@github.com/et3arraf/react-native-flag-image.git
``` 

```javascript
import Flag from 'react-native-flag-image'

class MyComponent extends Component {
  render() {
    return (
      <View>
        <Flag width={60} height={40} countryCode={'SA'}/>
      </View>
    );
  }
}
```