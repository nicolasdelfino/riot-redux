<titleComponent>
  <h2>{this.opts.store.getState().app.title}</h2>
  <script>

    this.opts.store.subscribe(function() {
      this.update()
    }.bind(this))

  </script>
</titleComponent>
