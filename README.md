# Movie-review-application

## TMDB

-   Website url: https://www.themoviedb.org/

-   Full details: https://api.themoviedb.org/3/movie/<movie-id>?api_key={api_key}&append_to_response=videos,images

-   Get movie id: https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

-   video embed:

```HTML
<div class="embed-responsive embed-responsive-16by9">
 <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/<video-key>?rel=0" allowfullscreen></iframe>
</div>
```

-   Read [.env_sample](.env_sample) and create a [.env](.env) file and do the necessary changes.
