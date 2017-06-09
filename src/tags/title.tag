<titleComponent>
  <p class="description">Example using <span class="lib">{this.opts.store.getState().main.stateLib}</span></p>
  <h3>state text: {this.opts.store.getState().main.title}</h3>
  <script>
    this.opts.store.subscribe(function() {
      this.update()
    }.bind(this))
  </script>
  <style>
    .description {
      font-size: 13px;
      font-style: italic;
    }
    .lib {
      color: blue;
      font-weight: 800;
    }
  </style>
</titleComponent>
