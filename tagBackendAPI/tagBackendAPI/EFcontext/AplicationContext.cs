using Microsoft.EntityFrameworkCore;
using tagBackendAPI.Models;

namespace tagBackendAPI.EFcontext
{
    public class AplicationContext : DbContext
    {
        public DbSet<TagsHtml> tagsHtml => Set<TagsHtml>();
        
        private string _databaseSettings = "server=localhost;user=root;password=123456;database=tags;";
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMySql(_databaseSettings, ServerVersion.AutoDetect(_databaseSettings));
        }
    }
}
