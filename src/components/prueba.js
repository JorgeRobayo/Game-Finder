const handleGame = async (game) => {
    const detailedInfo = await getGmDescription(game.id)

    setCurrentData(detailedInfo)
    console.log('gameinfo', detailedInfo)
    console.log('hello world')
  }

  const getGmDescription = async (gameId) => {
    const url = `https://api.rawg.io/api/games/${gameId}?key=270a250046034f97a6940f3241a34200`;

    try {
      const response = await fetch(url);
      const gameDescResult = await response.json();

      return gameDescResult;
      }catch (error) {
        console.log('error:', error)
      }
  };