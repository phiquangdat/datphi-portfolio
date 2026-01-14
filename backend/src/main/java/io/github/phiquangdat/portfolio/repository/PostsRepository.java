package io.github.phiquangdat.portfolio.repository;

import io.github.phiquangdat.portfolio.model.Posts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostsRepository extends JpaRepository<Posts, Long> {

    List<Posts> findByTitleContaining(String title);

    List<Posts> findByDescriptionContaining(String description);

    List<Posts> findByDateContaining(String date);

    List<Posts> findByGithubUrlContaining(String githubUrl);

    List<Posts> findByVideoUrlContaining(String videoUrl);

    List<Posts> findByImageUrlContaining(String imageUrl);

    @Query(value = "SELECT * FROM posts WHERE :language = ANY(languages)", nativeQuery = true)
    List<Posts> findByLanguage(@Param("language") String language);
}
