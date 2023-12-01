import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Album } from "./entities/album.entity";
import { CreateAlbumDto } from "./dto/create-album.dto";
import { UpdateAlbumDto } from "./dto/update-album.dto";
import { Repository } from "typeorm";

@Injectable()
export class AlbumsService {

  constructor(
    @InjectRepository(Album)
    private albumRepository: Repository<Album>,
  ) {}

  async create(CreateAlbumDto: CreateAlbumDto) {
    const album = this.albumRepository.create(CreateAlbumDto);
    return await this.albumRepository.save(album);
  }

  async findAll() {
    return await this.albumRepository.find(); // Devuelve todos los empleados
  }

  async findOne(id:string) {
    const albump = await this.albumRepository.findOne({ where: {id} });

    return albump;
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto): Promise<Album> {
    const album = await this.albumRepository.findOne({ where: { id } });
    if (!album) {
      // Manejo de error si el album no existe
      throw new Error('El album con ID ${id} no fue encontrado');
    }

    // Actualizar el album con los datos del DTO
    this.albumRepository.merge(album, updateAlbumDto);
    return await this.albumRepository.save(album);
  }

  async delete(id: string) {
    let album = await this.findOne(id);
    if(album){
      const albums = this.albumRepository.delete({id});
      return "Ok";
    }
    else{
      return "Album no encontrado";
    }
  }
  }