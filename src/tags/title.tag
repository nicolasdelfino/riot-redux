<titleComponent>
  <h2>{this.opts.store.getState().main.title}</h2>
  <script>
    this.opts.store.subscribe(function() {
      this.update()
    }.bind(this))

  </script>
</titleComponent>
