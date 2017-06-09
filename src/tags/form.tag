<testComponent>
  <form onsubmit={changeTitle}>
    <input ref="titleBox" type="text" name="newTitlea">
    <input type="submit" value="send">
  </form>

  <script>
    import { actionMap } from '../store/actionMap';
    import { CHANGE_TITLE } from '../store/actionTypes'

    this.changeTitle = (e) => {
      e.preventDefault()

      const lib = this.opts.store.getState().main.stateLib
      const value = this.refs.titleBox.value

      //act on action depending on state lib
      actionMap(lib, this.opts.store, CHANGE_TITLE, value)
    }

    this.opts.store.subscribe(function() {
      this.update()
    }.bind(this))

  </script>
</testComponent>
