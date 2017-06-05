<app>
  <h2>{this.opts.store.getState().title}</h2>
  <form onsubmit={changeTitle}>
    <input ref="titleBox" type="text" name="newTitlea">
    <input type="submit" value="newTitle">
  </form>

  <script>
    console.log('app module initialized', this.opts)

    this.changeTitle = (e) => {
      e.preventDefault()
      console.log('dispatch')
      this.opts.store.dispatch({type:'CHANGE_TITLE', payload:this.refs.titleBox.value})
    }
  </script>
</app>
