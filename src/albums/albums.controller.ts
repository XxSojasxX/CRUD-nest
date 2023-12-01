import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AlbumsService } from "./albums.service";
import { CreateAlbumDto } from "./dto/create-album.dto";
import { UpdateAlbumDto } from "./dto/update-album.dto";
import { AlbumsModule } from "./albums.module";

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  async create(@Body() createEmpleadoDto: CreateAlbumDto) {
    return this.albumsService.create(createEmpleadoDto);
  }

  @Get()
  async findAll() {
    return this.albumsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.albumsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJugadorDto: UpdateAlbumDto) {
    return this.albumsService.update(id, updateJugadorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.albumsService.delete(id);
  }
}