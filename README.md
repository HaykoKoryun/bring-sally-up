# Bring Sally Up!
Tired of typing `docker-compose -f sally.yml up -d` and then `docker-compose -f sally.yml down`?

Well now you can save yourself some keystrokes and get pumped at the same time (listening to [**Flower by Moby**](https://www.youtube.com/watch?v=6A2V9Bu80J4))!

### How?
1. `npm install -g bring-sally-up`
2. open a directory in command line where you have a `docker-compose` file
3. run `bring sally up` (where _sally_ is the name of your `docker-compose` file)
4. when you are done, run `bring sally down`

### Platforms
#### Ubuntu

You will need to run these two commands to install `alsa` before running `npm install`, otherwise you will have no audio! 😢
```
sudo apt-get install alsa-base alsa-utils
sudo apt-get install libasound2-dev
```

#### Windows
Who knows?

#### Mac
Probably

###### **Note to self**: check that it works on Windows and Mac!