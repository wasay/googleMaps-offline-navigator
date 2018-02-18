import { h, Component } from "preact";
import style from "./style";
import MapContainer from '../../components/LeafletOsmMap';

export default class Maps extends Component {
  render() {
    return (
      <div class={style.maps}>
        <MapContainer />
      </div>
    );
  }
}