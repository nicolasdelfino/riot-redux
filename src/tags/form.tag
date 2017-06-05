<testComponent>
  <form onsubmit={changeTitle}>
    <input ref="titleBox" type="text" name="newTitlea">
    <input type="submit" value="newTitle">
  </form>

  <script>

    this.opts.store.dispatch({type:'INIT'})

    this.changeTitle = (e) => {
      e.preventDefault()
      console.log('dispatch')
      this.opts.store.dispatch({type:'CHANGE_TITLE', payload:this.refs.titleBox.value})
    }

    this.opts.store.subscribe(function() {
      this.update()
    }.bind(this))

  </script>
</testComponent>
