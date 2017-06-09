<testComponent>
  <form onsubmit={changeTitle}>
    <input ref="titleBox" type="text" name="newTitle">
    <input type="submit" value="send">
  </form>

  <form onsubmit={changeStateLib}>
    <input ref="redux" type="submit" value="USE REDUX">
    <input ref="dedux" type="submit" value="USE DEDUX">
  </form>

  <select value={2}>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
  </select>

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

    this.changeStateLib = (e) => {
      e.preventDefault()
      console.log('change lib', e.target)
    }

    this.opts.store.subscribe(function() {
      this.update()
    }.bind(this))

  </script>
</testComponent>
