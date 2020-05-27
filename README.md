# CMPM163Labs
## Lab2
Video of part1: https://drive.google.com/file/d/1E3s7EBW8l85gcVooLhyNAZfdeCUp7H9T/view?usp=sharing
![Image of Part2](https://i.ibb.co/D5mS7QS/Screen-Shot-2020-04-14-at-12-00-58-PM.png)
## Lab3
Video of lab3: https://drive.google.com/file/d/1DlbOaQ4okqTLWz161JLlBB8VXvVT3nvm/view?usp=sharing
## Lab4
Questions:<br/>
* a. x = U*8
* b. y = u*8
* White<br/><br/>

Cubes (from left to right):
* Cube1: Cube made by following google doc part 1 instructions, it used texture and normal map No.155
* Cube2: Cube made by following google doc part 1 instructions, it used texture No.156
* Cube3: Same as Cube2 but it has a nomral map on it
* Cube4: The final cube, it has a tiling texture onit, it used texture No.176<br/>
I implmented tiling effect by first detect the position of current uv, for exmple, if its x and y are both larger than 0.5 then it means current coordinates are located on the top right corner of the cube. Then I shrink texture down to the bottom-left corner and put it on the top right corner by doing some calculation to its coordinates.
* Cube5: Cube made by following google doc part 2 instructions, it used texture No.176
<br/>
Video of lab4: https://drive.google.com/file/d/1OD4BAGuFC-aD6Y-jRjUCW3LvKVBe8GDL/view?usp=sharing

## Lab5
### Part1
Video: https://drive.google.com/file/d/189_4gfpzzYaM-OwSxiXlFXUyUaA7PAfo/view?usp=sharing <br/>
I added trail for particles and grident color to the particles. Then I added force to their X-axis so they can look like they are blowing away by wind. At last, I gave them a gravity property give them a more dynamic feelings.
### Part2
a video of moving around the static particles that change colors<br/>
https://drive.google.com/file/d/1kaHS403wQz9UDjMEQvakuZBoOpqm6BK3/view?usp=sharing <br/>
a video of explosion of particles<br/>
https://drive.google.com/file/d/1xkJ9WhWI1J1lvsmPC8BLlAslkvuTfGXa/view?usp=sharing <br/>
a video of your custom particle animation<br/>
https://drive.google.com/file/d/1HQt_soB86Adcrh5yPmFFJOGrY3AIbXp_/view?usp=sharing <br/>

## Lab6
### Part2
![Image of Part2](https://i.ibb.co/3y7mGWk/Screen-Shot-2020-05-12-at-7-07-41-PM.png)
Link: https://www.shadertoy.com/view/WsBBzz

## Lab7
### Part2A
![Image of Part2A](https://i.ibb.co/pdsNGJ5/Screen-Shot-2020-05-19-at-8-06-45-PM.png)
![Image of Part2A](https://i.ibb.co/vLZRVYv/Screen-Shot-2020-05-19-at-8-07-05-PM.png)
### Part2B
Link: https://drive.google.com/file/d/1jq9pPNljYu5wrleeqdsPjCbLrunkbzFk/view?usp=sharing
### Part2C
Link: https://drive.google.com/file/d/1UPk2U2i8zrD1JVfvGy1lgfQfUM3yoKb3/view?usp=sharing <br />
Partner check: <br />
I did Part 1.<br />
The part that I found most challenging was figuring out how to use the Shader Graph to manipulate the material in such a way to produce the intended effects that I wanted for my scene, such as the snowy mountain tops, or the snowy bushes. The part that I found most interesting was the Shader Graph itself. Being able to manipulate the shader by connecting nodes makes the entire process intuitive and easier to manipulate while also being able to see your changes in realtime.

## Lab8
![Image of Part2](https://i.imgur.com/iUOInfC.jpg)
I wanted to make the whole picture more like a photographic work for example, all the inspiration images has mountains and some of the has water, so I combined the newly generated city with the terrain and the ocean from last lab. On the top of those, I added sky and fog effects to make city more realistic and dynamic.<br />
* City's buildings' heights are generated randomly and their texture are decided by their heights for example, skyscrapers has a glass texture on them. 
* Terrain and water are from last lab but increased their scales so they can be placed far away from city to create a distance view.
* The sky is made by gradient background with two lighting objects, one is simulating sun's light, it is positioned as close to real life as possible by considering its distance and direction to the city. It mainly used to shine a light on buildings. The other one is for the fogs to create a dusk atmosphere, it set in the same poistion as sun light but its exposure range is set very wide so it can reflect on the fogs.
* Fogs are made of a bunch of transparent fog images arranged unevenly accross the map.<br />
### Partner check:
He used Unity's built-in noise map to get a range of values between 0-1 and manipulate those values to choose buildings of differing height to be placed in clusters. The same idea was applied for the grass tiles and the water tiles. Choosing the landscape was bit of an ordeal as he decided to randomly generate seeds until he found a landscape that he wanted to work with. His making process reminds me Minecraft which is really interesting to me. From his practice I think random seed can be a great tool to generate a random map.
