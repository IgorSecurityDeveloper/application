function Folder() {
        const backgroundImageUrl = 'URL_DA_SUA_IMAGEM_AQUI';  // Substitua pela URL da sua imagem de fundo
      
        return (
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Adicionando transparência
            }}
          >
            <div className="text-center text-white">
              <h1>Texto sobreposto</h1>
              <p>Seu texto descritivo aqui.</p>
              <button className="btn btn-primary">Meu Botão</button>
            </div>
          </div>
        );
      
}

export default Folder;